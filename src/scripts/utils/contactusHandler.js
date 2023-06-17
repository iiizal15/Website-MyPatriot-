import MyPatriotIdbSource from '../data/mypatriotdb-source';

const ContactUsHandler = async () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const data = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  if (data.name === '' || data.email === '' || data.message === '') {
    alert('Formulir tidak boleh kosong');
  } else {
    await MyPatriotIdbSource.ContactUsPost(data);
    alert('Pesan Berhasil dikirim');
  }
};

export default ContactUsHandler;
