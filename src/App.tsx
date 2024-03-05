import FilterButtons from './components/FilterButtons';
import Section from './components/Section';
import TextField from './components/TextField/TextField';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <Section>
      <TextField />
      <FilterButtons />
      <ToDoList />
    </Section>
  );
};

export default App;
