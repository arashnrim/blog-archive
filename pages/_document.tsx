import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="text-white bg-[#0a0a0a]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
