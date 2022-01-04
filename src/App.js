import React from "react";
import { getArticles } from "./api";
import { Container, Header } from "semantic-ui-react";

class App extends React.Component {
  state = {
    articles: [],
    apiError: "",
  };

    render() {
        const { articles, apiError } = this.state;
        return (
            <Container>
                <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
                    Bitcoin articles
                </Header>
                {articles.length > 0 && <ArticleList articles={articles} />}
                {apiError && <p>Could not fetch any articles. Please try again.</p>}
            </Container>
        );
    }
}

export default App;