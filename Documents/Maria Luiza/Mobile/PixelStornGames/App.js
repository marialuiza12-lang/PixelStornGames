import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function app() {
  const [pagina, setPagina] = useState('home');
  return (
    <SafeAreaView style={styles.container}>
      <Header pagina={pagina} setPagina={setPagina} />
      <ScrollView contentContainerStyle={styles.content}>
        {pagina === 'home' && <Home />}
        {pagina === 'sobre' && <Sobre />}
        {pagina === 'servicos' && <Servicos />}
        {pagina === 'contato' && <Contato />}
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

function Header({ pagina, setPagina }) {
  return (
    <View style={styles.header}>
    <Text style={styles.headerTittle}>Pixel Storn Games</Text>
    <View style={styles.nav}>
    {['home', 'sobre', 'servidores', 'contato'].map((p) => (
      <TouchableOpacity
      key={p}
      style={[styles.navButton, pagina === p && styles.navButtonActive]}
      onPress={() => setPagina(p)}
      >
        <Text style={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
        </TouchableOpacity>
    ))}
    </View>
    </View>
  );
}


function Home() {
  return (
<View style={styles.section}>
  <Text style={styles.title}>Bem-Vindo a nossa empresa de jogos</Text>
  <Text>Aqui voce encontrara jogos de todos os tipos</Text>
</View>
  );
}

function Sobre() {
  return (
<View style={styles.section}>
  <Text style={styles.title}>Sobre nós</Text>
  <Text>A Pixel Storn Games foi fundada em 2012 e desde então se dedica a criar jogos que unem nostalgia retrô com inovação tecnológica.
Seu primeiro título, "Quest of Shadows", conquistou rapidamente uma comunidade de jogadores independentes, abrindo caminho para projetos maiores. O grande marco veio em 2018, com o lançamento de "StormRiders", que alcançou sucesso internacional e levou a empresa a participar das principais feiras de games do mundo.
Atualmente, a Pixel Storn Games é reconhecida por suas histórias envolventes, mundos vibrantes e jogabilidade criativa, mantendo viva a filosofia de que “jogos são feitos de pixels, mas também de sonhos.”</Text>
</View>
  );
}


function Servicos() {
  return (
<View style={styles.section}>
  <Text style={styles.title}>Games</Text>
  <Text>- Tipos de jogos</Text>
  <Text>- Criação de jogos</Text>
  <Text>- Suporte</Text>
</View>
  );
}

function Contato() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  function enviar() {
    if (!nome || !email || !mensagem){
      Alert.alert('Erro', 'Por favor preencha todos os campos');
      return;
    }
    Alert.alert('Mensagem enviada', `Obrigado, ${nome}! retornaremos em breve.`);
    setNome('');
    setEmail('');
    setMensagem('');
  }
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Mensagem"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 Pixel Storn Games.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#f4f7fa' },
header: {
  backgroundColor: '#004080',
  padding: 15,
},
headerTittle: {
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10
},
nav: { flexDirection: 'row', justifyContent: 'space-around'},
navButton: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 4 },
navButtonActive: { backgroundColor: '0066cc'},
navButtonText: { color: 'white', fontWeight: 'bold' },
content: { padding: 20, flexGrow: 1},
section: { marginBottom: 20 },
title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
input: {
  backgroundColor: 'white',
  borderColor: '#ccc',
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 4,
  marginBottom: 15,
},
button: {
  backgroundColor: '#004080',
  paddingVertical: 12,
  borderRadius: 4,
  alignItems: 'center',
},
buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
footer: { backgroundColor: '#00264d', padding: 15, alignItems: 'center' },
}
);
