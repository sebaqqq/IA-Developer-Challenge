import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";
import Introduction from "./components/Sections/Introduction";
import OptimizationSection from "./components/Sections/OptimizationSection";
import GptComponent from "./components/Sections/GptComponent";
import Reflection from "./components/Sections/Reflection";
import Conclusion from "./components/Sections/Conclusion";
import styles from "./utils/styles";

function App() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <Layout>
        <Hero />
        <Introduction />
        <OptimizationSection />
        <GptComponent />
        <Reflection />
        <Conclusion />
      </Layout>
    </>
  );
}

export default App;
