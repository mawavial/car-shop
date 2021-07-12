import { Service } from "./service";

const url = 'localhost:3000/api/carApi'

export class CarService {
  constructor(service) {}

  getAll = async() => { 
      return this.service
      .get(url)
      .then(response => response?.data)
      .catch(error => console.log(error))
  }
}

const service = new Service();
const carService = new CarService(service);
export default carService;