document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();

    const countries = ["Afganistán", "Albania", "Argelia", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán",
                       "Bahamas", "Baréin", "Bangladés", "Barbados", "Bielorrusia", "Bélgica", "Belice", "Benín", "Bután", "Bolivia",
                       "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
                       "Camboya", "Camerún", "Canadá", "República Centroafricana", "Chad", "Chile", "China", "Colombia", "Comoras",
                       "Congo", "Costa Rica", "Croacia", "Cuba", "Chipre", "República Checa", "Dinamarca", "Yibuti", "Dominica", "República Dominicana",
                       "Ecuador", "Egipto", "El Salvador", "Guinea Ecuatorial", "Eritrea", "Estonia", "Esuatini", "Etiopía", "Fiyi", "Finlandia",
                       "Francia", "Gabón", "Gambia", "Georgia", "Alemania", "Ghana", "Grecia", "Granada", "Guatemala", "Guinea", "Guinea-Bisáu",
                       "Guyana", "Haití", "Honduras", "Hungría", "Islandia", "India", "Indonesia", "Irán", "Irak", "Irlanda", "Israel", "Italia",
                       "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kiribati", "Kuwait", "Kirguistán", "Laos", "Letonia", "Líbano",
                       "Lesoto", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malaui", "Malasia", "Maldivas",
                       "Malí", "Malta", "Islas Marshall", "Mauritania", "Mauricio", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia",
                       "Montenegro", "Marruecos", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Países Bajos", "Nueva Zelanda", "Nicaragua",
                       "Níger", "Nigeria", "Corea del Norte", "Macedonia del Norte", "Noruega", "Omán", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea",
                       "Paraguay", "Perú", "Filipinas", "Polonia", "Portugal", "Catar", "Rumania", "Rusia", "Ruanda", "San Cristóbal y Nieves",
                       "Santa Lucía", "San Vicente y las Granadinas", "Samoa", "San Marino", "Santo Tomé y Príncipe", "Arabia Saudita", "Senegal",
                       "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Eslovaquia", "Eslovenia", "Islas Salomón", "Somalia", "Sudáfrica",
                       "Corea del Sur", "Sudán del Sur", "España", "Sri Lanka", "Sudán", "Surinam", "Suecia", "Suiza", "Siria", "Taiwán", "Tayikistán",
                       "Tanzania", "Tailandia", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turquía", "Turkmenistán", "Tuvalu",
                       "Uganda", "Ucrania", "Emiratos Árabes Unidos", "Reino Unido", "Estados Unidos", "Uruguay", "Uzbekistán", "Vanuatu",
                       "Ciudad del Vaticano", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabue"];

    const nationalities = ["Afgana", "Albanesa", "Algeriana", "Andorrana", "Angoleña", "Argentina", "Armenia", "Australiana", "Austríaca", "Azerbaiyana",
                           "Bahameña", "Bareiní", "Bangladesí", "Barbadense", "Bielorrusa", "Belga", "Beliceña", "Beninesa", "Butanesa", "Boliviana",
                           "Bosnia", "Botswanesa", "Brasileña", "Bruneana", "Búlgara", "Burkinesa", "Burundesa", "Cabo Verdeana", "Camboyana", "Camerunesa",
                           "Canadiense", "Centroafricana", "Chadiana", "Chilena", "China", "Colombiana", "Comorense", "Congoleña", "Costarricense", "Croata",
                           "Cubana", "Chipriota", "Checa", "Danesa", "Yibutiana", "Dominica", "Dominicana", "Ecuatoriana", "Egipcia", "Salvadoreña",
                           "Ecuatoguineana", "Eritrea", "Estonia", "Suazi", "Etíope", "Fiyiana", "Finlandesa", "Francesa", "Gabonense", "Gambiana", "Georgiana",
                           "Alemana", "Ghanesa", "Griega", "Granadina", "Guatemalteca", "Guineana", "Guineana-Bisáu", "Guyanesa", "Haitiana", "Hondureña",
                           "Húngara", "Islandesa", "India", "Indonesia", "Iraní", "Iraquí", "Irlandesa", "Israelí", "Italiana", "Jamaicana", "Japonesa",
                           "Jordana", "Kazaja", "Kenia", "Kiribatiana", "Kuwaití", "Kirguisa", "Laosiana", "Letona", "Libanesa", "Lesotense", "Liberiana",
                           "Libia", "Liechtensteiniana", "Lituana", "Luxemburguesa", "Malgache", "Malauí", "Malasia", "Maldiva", "Maliense", "Maltesa",
                           "Marfileña", "Mauritana", "Mauricia", "Mexicana", "Micronesia", "Moldava", "Monegasca", "Mongola", "Montenegrina", "Marroquí",
                           "Mozambiqueña", "Birmana", "Namibia", "Nauruana", "Nepalesa", "Neerlandesa", "Neozelandesa", "Nicaragüense", "Nigeriana", "Norcoreana",
                           "Noruega", "Omán", "Pakistaní", "Palauana", "Palestina", "Panameña", "Papú", "Paraguaya", "Peruana", "Filipina", "Polaca",
                           "Portuguesa", "Qatarí", "Rumano", "Rusa", "Ruandesa", "San Cristobalense", "Santa Lucía", "Sanvicentina", "Samoana", "Sanmarinense",
                           "Santomense", "Saudí", "Senegalesa", "Serbia", "Seychellense", "Sierraleonesa", "Singapurense", "Eslovaca", "Eslovena", "Salomonense",
                           "Somalí", "Sudafricana", "Surcoreana", "Sudanesa", "Surinamesa", "Sueca", "Suiza", "Siria", "Taiwanesa", "Tayika", "Tanzana",
                           "Tailandesa", "Timorense", "Togolesa", "Tongana", "Trinitense", "Tunecina", "Turca", "Turcomana", "Tuvaluana", "Ugandesa",
                           "Ucraniana", "Emiratí", "Británica", "Estadounidense", "Uruguaya", "Uzbeca", "Vanuatuense", "Vaticana", "Venezolana", "Vietnamita",
                           "Yemení", "Zambiana", "Zimbabuense"];

    function populateSelect(selectId, options) {
        const select = document.getElementById(selectId);
        options.forEach(function(option) {
            const opt = document.createElement('option');
            opt.value = option;
            opt.text = option;
            select.appendChild(opt);
        });
    }

    function populateDays(selectId) {
        const select = document.getElementById(selectId);
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            select.appendChild(option);
        }
    }

    function populateMonths(selectId) {
        const select = document.getElementById(selectId);
        for (let i = 1; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            select.appendChild(option);
        }
    }

    function populateYears(selectId, startYear, endYear) {
        const select = document.getElementById(selectId);
        for (let i = startYear; i <= endYear; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            select.appendChild(option);
        }
    }
    populateSelect('pais-nacimiento', countries);
    populateSelect('nacionalidad', nationalities);
    populateSelect('pais-emision', countries);

    populateDays('dia-nacimiento');
    populateMonths('mes-nacimiento');
    populateYears('año-nacimiento', 1900, currentYear);

    populateDays('dia-emision');
    populateMonths('mes-emision');
    populateYears('año-emision', 1900, currentYear);

    populateDays('dia-vencimiento');
    populateMonths('mes-vencimiento');
    populateYears('año-vencimiento', 1900, currentYear + 10);
});