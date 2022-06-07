import ExampleDetails from '@/components/examples/example-details'
import ExampleWrapper from '@/components/examples/example-wrapper'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Intro from '@/components/intro'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

const Home: NextPage = ({ styles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <Intro />
      <main>
        <a href="#showcase"><h2 id="showcase">Showcase</h2></a>
        <ExampleDetails name="base" styleString={styles["css/base.css"]} />

        <ExampleWrapper name="headings" styleStrings={styles}>
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
        </ExampleWrapper>

        <ExampleWrapper name="Text">
          <p>
            <strong>Bold</strong>
          </p>
          <p>
            <em>Italic</em>
          </p>
          <p>
            <code>Code</code>
          </p>
          <p>
            Some <sub>Sub</sub>script
          </p>
          <p>
            Some <sup>Sup</sup>erscript
          </p>
          <pre>
            <code>
              {`<pre>
  with a <code></code>
<pre>`}
            </code>
          </pre>
          <blockquote>This is a blockquote.</blockquote>
        </ExampleWrapper>

        <ExampleWrapper name="details" styleStrings={styles}>
        </ExampleWrapper>

        <ExampleWrapper name="buttons" styleStrings={styles}>
          <button>Example</button>
          <button disabled>Disabled</button>
        </ExampleWrapper>

        <ExampleWrapper name="table" styleStrings={styles}>
          <table>
            <thead>
              <tr>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Content</td>
                <td>Content</td>
                <td>Content</td>
                <td>Content</td>
              </tr>
              <tr>
                <td>Content</td>
                <td>Content</td>
                <td>Content</td>
                <td>Content</td>
              </tr>
              <tr>
                <td>Content</td>
                <td>Content</td>
                <td>Content</td>
                <td>Content</td>
              </tr>
            </tbody>
          </table>
        </ExampleWrapper>
        <ExampleWrapper name="header" styleStrings={styles}>
          <header>
            This is a header. It assumes the width of it&apos;s container, which is why
            it&apos;s small here. You should also probably have an &lt;h1&gt; inside
            it, like at the top of this page.
          </header>
        </ExampleWrapper>
        <ExampleWrapper name="footer" styleStrings={styles}>
          <footer>This is a footer.</footer>
        </ExampleWrapper>
        <ExampleWrapper name="aside" styleStrings={styles}>
          This is some text.
          <aside>This is an aside.</aside>
        </ExampleWrapper>
        <ExampleWrapper name="link" styleStrings={styles}>
          <a href="https://github.com/maxleiter">A link</a>
          <a href="#link"><h4>A link to an anchor containing a heading</h4></a>
        </ExampleWrapper>
        <ExampleWrapper name="inputs" styleStrings={styles}>
          <label htmlFor="textInput">
            Text input with a label:
            <input type="text" id="textInput" placeholder="Text input" />
          </label>
          <input type="password" placeholder="Password input" />
          <input type="number" placeholder="Number input" />
          <input type="date" placeholder="Date input" />
          <input type="time" placeholder="Time input" />
          <input type="color" placeholder="Color input" />
          <input type="range" placeholder="Range input" />
          <label htmlFor="checkbox"
          >Checkbox:
            <input type="checkbox" id="checkbox" />
          </label>

          <input type="file" />
        </ExampleWrapper>
        <ExampleWrapper name="lists" styleStrings={styles}>
          <ul>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
            <li>Unordered list item</li>
          </ul>
          <ol>
            <li>Ordered list item</li>
            <li>Ordered list item</li>
            <li>Ordered list item</li>
          </ol>
          <ol>
            <li>with nested items</li>
            <ol>
              <li>nested</li>
            </ol>
          </ol>

          <ul>
            <li>with nested items</li>
            <ul>
              <li>nested</li>
            </ul>
          </ul>

          <ul><li>
            <a href="">A link</a>
          </li></ul>

        </ExampleWrapper>

      </main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const styles: Record<string, string> = {}

  const { globby } = await import("globby");
  const fs = await import("fs/promises");
  const files = await globby(["css/**/*.css"])

  for (const file of files) {
    const content = await fs.readFile(file, "utf8")
    styles[file] = content
  }

  return {
    props: {
      styles,
    },
  }
}

export default Home
