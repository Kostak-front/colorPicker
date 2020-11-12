import React from 'react'
import Layout from './hoc/Layout/Layout'
import ColorPicker from './Containerts/ColorPicker/ColorPicker'
import './App.module.css';

function App() {
  return (
    <Layout>
      <ColorPicker />
    </Layout>
  );
}

export default App;
