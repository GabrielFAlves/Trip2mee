import React, { useState } from 'react';
import "./TripForm.css";

const TripForm = () => {
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [season, setSeason] = useState('');
    const [budget, setBudget] = useState('');
    const [apiResponse, setApiResponse] = useState(null); // Estado para armazenar a resposta da API

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', { destination, duration, season, budget });
        const prompt = `Gostaria de criar um roteiro de viagem, eu vou para ${destination}, ficarei ${duration} dias, a estação será ${season} e meu orçamento é ${budget}.`
        const requestBody = {
            prompt: prompt
        }
        try {
            const response = await fetch('http://127.0.0.1:5000/generate_trip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const data = await response.json();
                setApiResponse(data); // Armazenar a resposta da API
            } else {
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            alert('Erro na requisição');
        }
    };

    // Função para formatar a resposta da API
    const formatApiResponse = (apiResponse) => {
        // Substitui ** por <h2> e *** por <h3>
        const formattedResponse = apiResponse.replace(/\*\*\s*([^*]+)\s*\*\*/g, "<h2>$1</h2>")
                                              .replace(/\*\*\*\s*([^*]+)\s*\*\*\*/g, "<h3>$1</h3>");
        return (
            <div className="api-response">
                <h2>Roteiro de Viagem Gerado</h2>
                <div dangerouslySetInnerHTML={{ __html: formattedResponse }} />
            </div>
        );
    };

    return (
        <section className="section-form">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Crie Seu Roteiro</h1>
                <p>Preencha o Formulário abaixo para criarmos seu roteiro.</p>

                <label className="label">
                    Destino:
                    <input
                        className="input"
                        type="text"
                        value={destination}
                        onChange={e => setDestination(e.target.value)}
                    />
                </label>

                <label className="label">
                    Duração da Viagem (Dias):
                    <input
                        className="input"
                        type="number"
                        value={duration}
                        onChange={e => setDuration(e.target.value)}
                    />
                </label>

                <label className="label">
                    Estação do Ano:
                    <select
                        className="input"
                        value={season}
                        onChange={e => setSeason(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="Verão">Verão</option>
                        <option value="Outono">Outono</option>
                        <option value="Inverno">Inverno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </label>

                <label className="label">
                    Orçamento:
                    <select
                        className="input"
                        value={budget}
                        onChange={e => setBudget(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="Baixo">Baixo</option>
                        <option value="Médio">Médio</option>
                        <option value="Alto">Alto</option>
                    </select>
                </label>

                <button className="button" type="submit">Enviar</button>
            </form>

            {/* Verifica se há uma resposta da API e, se houver, formata-a */}
            {apiResponse && formatApiResponse(apiResponse.text)}
        </section>
    );
};

export default TripForm;
