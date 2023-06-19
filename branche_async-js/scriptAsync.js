    // on va récupérer les infos de plusieurs sites

    const sites = ['www.google.com', 
    'www.wikipedia.com', 
    'www.panda.fr', 
    'www.renault', 
    'www.bonjour.com', 
    'www.maroon5.com', 
    'www.duolingo.fr', 
    "www.twitter.com", 
    'www.marmiton.fr', 
    'www.npa.fr']

    async function testSites () {
        const promises = sites.map(async(site) => {
            const startTime = Date.now();
            try {
                const endTime = Date.now();
                const loadTime = endTime - startTime;
                console.log('Site '+ site + ', Temps de chargement :'+loadTime +' ms');
            } catch (error){
                console.error('Erreur du chargement du site ' + site + ': ', error);
            }
        });


    await Promise.all(promises);

    console.log('Tous les sites ont été testés.');
    }

    testSites();
