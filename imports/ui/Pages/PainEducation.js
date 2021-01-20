const PainEducation = {
    "module-title": "Pijneducatie",
    "module-parts": 6,
    "part-1": {
        "title": "Ontstaan van pijn",
        "description": "In dit onderdeel zien we hoe pijn ontstaat en de weg die prikkels moeten afleggen naar onze hersenen.",
        "duration": "15 minuten",
        "type": "Informatief",
        "cards": [
            {"PE-MOD-card-1": {
                    "header": "Inleiding",
                    "card-content": [
                        {
                            "type": "Text",
                            "content": "Je lichaam neemt prikkels waar en stuurt deze info naar de hersenen. De hersenen analyseren de prikkels en kiezen een gepaste reactie, bijvoorbeeld pijn. In dit onderdeel wordt beschreven welke weg een prikkel moet afleggen voordat je effectief pijn ervaart. Het centrale zenuwstelsel speelt hierbij een cruciale rol. Onderstaand filmpje geeft meer uitleg en nadien is er een reflectieoefening."
                        },
                        {
                            "type": "Video",
                            "link": {"nl-NL":"https://player.vimeo.com/video/485835694", "nl-FR": "https://player.vimeo.com/video/485835249", "en-EN":"https://player.vimeo.com/video/485834880"}
                        }
                    ]
                }
            }, 
            {"PE-MOD-card-2": {
                "header": "Vragen",
                "card-content": [
                    {
                        "type": "Text",
                        "content": "Goed zo, je hebt het eerste filmpje over hoe pijn ontstaat met succes doorlopen. Heb je het goed onthouden en begrepen?",
                        "show-if": "Pain"
                    },
                    {
                        "type": "Question",
                        "code": "PE-MOD1-Q1",
                        "question": "Wanneer je je voet omslaat wordt dit eerst waargenomen door de receptoren in de huid, gewrichten en spieren van je voet. Er zal een boodschap als waarschuwing van mogelijk gevaar worden gestuurd naar je ruggenmerg en hersenen.",
                        "options": ["Juist", "Fout"],
                        "correct": "Juist",
                        "onCorrect": "Goed zo! Wanneer je je voet omslaat wordt dit geregistreerd door receptoren in de voet. Die receptoren werken als poorten en zorgen ervoor dat er ladingen de zenuwcel instromen. Bij voldoende ladingen wordt er een gevaarboodschap aangemaakt in de vorm van een elektrisch signaal.",
                        "onIncorrect": "Jammer, maar deze stelling is juist. Wanneer je je voet omslaat wordt dit geregistreerd door receptoren in de voet. Die receptoren werken als poorten en zorgen ervoor dat er ladingen de zenuwcel instromen. Bij voldoende ladingen wordt er een gevaarboodschap aangemaakt in de vorm van een elektrisch signaal."
                    }
                ]}
            }]
    }
}

export default PainEducation;