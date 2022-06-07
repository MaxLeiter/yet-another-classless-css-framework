const ExampleDetails = ({
    name,
    styleString
}: {
    name: string,
    styleString: string,
}) => {
    return (<details>
    <summary><code>{name}.css</code></summary>
    <pre>
        {styleString}
    </pre>
  </details>)
}

export default ExampleDetails