import "./App.css";

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <MyButton title="点我" disabled={true} />
    </div>
  );
}

export default App;
