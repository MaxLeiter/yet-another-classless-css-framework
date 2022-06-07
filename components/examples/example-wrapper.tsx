import ExampleDetails from "./example-details";

const ExampleWrapper = ({ name, styleStrings, children }: {
    styleStrings?: Record<string, string>,
    name: string,
    children: React.ReactNode | React.ReactNode[];
}) => {
    return (
        <article>
            <a href={`#${name}`}><h3 id={name}>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h3></a>
            <hr />
            {styleStrings && <ExampleDetails name={name} styleString={styleStrings[`css/${name}.css`]} />}
            {children}
        </article>
    );
};

export default ExampleWrapper;
