import { Injectable } from "@nestjs/common";
import { RegisterPersonEntity } from "../entities/register-person.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { RegisterPersonDto } from "../dto/register-person.dto";

@Injectable()
export class RegisterPersonService {
  constructor(
    @InjectRepository(RegisterPersonEntity)
    private readonly registerPersonRepository: Repository<RegisterPersonEntity>
  ) {
  }

  async all() {
    return await this.registerPersonRepository.find({
      order: {
        id: "DESC"
      }
    });
  }

  async create(registerPersonDto: RegisterPersonDto) {
    const registerPerson = new RegisterPersonEntity();
    registerPerson.name = registerPersonDto.name;
    await this.registerPersonRepository.save(registerPerson);
    return await this.all();
  }

  async seed() {
    const persons: RegisterPersonEntity[] = [
      {
        name: "Maicol Alfonso Rueda Cabrera"
      },
      {
        name: "Cristhian Chuquimia Mendoza"
      },
      {
        name: "David Josue Vargas Cordero"
      },
      {
        name: "Angelica Cristina Rios Videz"
      },
      {
        name: "Eliana Hurtado Rivero"
      },
      {
        name: "Johanny Amalia Hidalgo Castaños"
      },
      {
        name: "Rebeca Perez Paz"
      },
      {
        name: "Katia Paula Alba Bastos"
      },
      {
        name: "María Luisa Viveros Claure"
      },
      {
        name: "Jasmynee Yuliza Yucra Valdez"
      },
      {
        name: "Daniza Arriaza Herrera"
      },
      {
        name: "Percy Luzio Sagredo"
      },
      {
        name: "Maribel Doria Medina Perez"
      },
      {
        name: "William Salas Cuellar"
      },
      {
        name: "Sdenka Chávez Añez"
      },
      {
        name: "Vladimir Casto Valencia Ayaviri"
      },
      {
        name: "Jose Franco Rodriguez"
      },
      {
        name: "Giselle Darling Salazar Osinaga"
      },
      {
        name: "Georgina Vanessa Pereira Vaca"
      },
      {
        name: "Georgina Katherin Soliz Maldonado"
      },
      {
        name: "Heidy Lorena Gomez Sanguino"
      },
      {
        name: "Arnol Alexander Guevara Ramos"
      },
      {
        name: "Maribel Uzeda Veliz"
      },
      {
        name: "Alejandro Mauricio Vera Fernández"
      },
      {
        name: "Lucho Guzmán Alba"
      }
    ];

    return await this.registerPersonRepository.save(persons);
  }
}
