import { saveRider } from "../models/ride_model"; // Substitua pelo caminho real do seu módulo

const testSaveRider = async () => {
  try {
    const rideData = {
      id: 1,
      customer_id: "cust123",
      origin: "Point A",
      destination: "Point B",
      distance: 10,
      duration: "30min",
      driver: {
        id: 100,
        name: "John Doe",
      },
      value: 50,
      date: "2024-11-22T10:00:00Z",
    };

    console.log("Enviando os seguintes dados para salvar:");
    console.log(rideData);

    const result = await saveRider(rideData);

    console.log("Rider salvo com sucesso! ID retornado:", result);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Erro ao salvar rider:", error.message);
    } else {
      console.error("Erro ao salvar rider:", error);
    }
  }
};

testSaveRider();
