function systemComponents(input) {

    let system = {};

    for (const line of input) {
        let [systemName, componentName, subcomponentName] = line.split(' | ');

        if (!system.hasOwnProperty(systemName)) {
            system[systemName] = {};
        }

        if (!system[systemName].hasOwnProperty(componentName)) {
            system[systemName][componentName] = [];
        }

        system[systemName][componentName].push(subcomponentName);
    }

    system = Object.entries(system).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
    }).forEach(([key, value]) => {
        console.log(key);
        Object.entries(value)
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(([compName, subName]) => {
                console.log(`|||${compName}`);
                for (const sub of subName) {
                    console.log(`||||||${sub}`);
                }
            });
    });
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);
