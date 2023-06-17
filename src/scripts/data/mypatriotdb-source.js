class MyPatriotIdbSource {
  static async ContactUsPost(data) {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    const response = await fetch('https://restapifirebase-94fd0-default-rtdb.firebaseio.com/Mypetriot/ContactUs.json', config);
    return response.json();
  }
}

export default MyPatriotIdbSource;
