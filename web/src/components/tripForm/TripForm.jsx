import React, { useState } from 'react';
import { marked } from 'marked';
import "./TripForm.css";

const TripForm = () => {
    const [destination, setDestination] = useState('');
    const [duration, setDuration] = useState('');
    const [season, setSeason] = useState('');
    const [budget, setBudget] = useState('');
    const [activities, setActivities] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [environment, setEnvironment] = useState('');
    const [apiResponse, setApiResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Dados do formulário:', { destination, duration, season, budget, activities, hobbies, environment });
        const prompt = `Gostaria de criar um roteiro de viagem, eu vou para ${destination}, ficarei ${duration} dias, a estação será ${season}, meu orçamento é ${budget}, gosto de atividades ${activities}, meus hobbies são ${hobbies} e prefiro ambientes ${environment}.`;
        const requestBody = {
            prompt: prompt
        }
        try {
            const response = await fetch('https://firmamento.pythonanywhere.com/generate_trip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const data = await response.json();
                setApiResponse(data);
            } else {
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            alert('Erro na requisição');
        }
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
                        <option value="Baixo">Baixo - Viagem econômica, preferindo acomodações simples e refeições baratas.</option>
                        <option value="Médio">Médio - Viagem confortável, com um equilíbrio entre economia e conforto.</option>
                        <option value="Alto">Alto - Viagem de luxo, preferindo acomodações premium e experiências exclusivas.</option>
                    </select>
                </label>

                <label className="label">
                    Tipo de Atividades:
                    <select
                        className="input"
                        value={activities}
                        onChange={e => setActivities(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Cultura">Cultura</option>
                        <option value="Gastronomia">Gastronomia</option>
                        <option value="História">História</option>
                    </select>
                </label>

                <label className="label">
                    Hobbies:
                    <input
                        className="input"
                        type="text"
                        value={hobbies}
                        onChange={e => setHobbies(e.target.value)}
                    />
                </label>

                <label className="label">
                    Ambiente Preferido:
                    <select
                        className="input"
                        value={environment}
                        onChange={e => setEnvironment(e.target.value)}
                    >
                        <option value="">Selecione</option>
                        <option value="Cidades agitadas">Cidades agitadas</option>
                        <option value="Paisagens naturais">Paisagens naturais</option>
                        <option value="Resorts de luxo">Resorts de luxo</option>
                    </select>
                </label>

                <button className="button" type="submit">Enviar</button>
            </form>

            {apiResponse && (
                <div className="api-response">
                    <h2>Roteiro de Viagem Gerado</h2>
                    <div dangerouslySetInnerHTML={{ __html: marked(apiResponse.text) }} />
                </div>
            )}
        </section>
    );
};

export default TripForm;
