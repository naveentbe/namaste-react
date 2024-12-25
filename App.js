


const parent = React.createElement(`div`, { id: `parent` },
    [React.createElement(`div`, { id: `child1` },
        [
            React.createElement(`h1`, {}, `Hello Naveen`),
            React.createElement(`h2`, {}, `Hello Naveen`)
        ]
    ),
    React.createElement(`div`, { id: `child2` },
        [
            React.createElement(`h1`, {}, `Hello Naveen`),
            React.createElement(`h2`, {}, `Hello Naveen`)
        ]
    )]
);

console.log(parent)

// const heading = React.createElement('h1', { id: `heading` }, `Hello Naveen`);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);