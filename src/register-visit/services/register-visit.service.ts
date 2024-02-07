import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RegisterVisitEntity } from "../entities/register-visit.entity";
import { Repository } from "typeorm";
import { RegisterVisitDto } from "../dto/register-visit.dto";
import { RegisterPersonEntity } from "../../register-person/entities/register-person.entity";

@Injectable()
export class RegisterVisitService {
  constructor(
    @InjectRepository(RegisterVisitEntity)
    private readonly registerVisitRepository: Repository<RegisterVisitEntity>,
    @InjectRepository(RegisterPersonEntity)
    private readonly registerPersonRepository: Repository<RegisterPersonEntity>
  ) {
  }

  async allByPersonName(name: string) {
    return await this.registerVisitRepository.find({
      where: {
        person: {
          name: name
        }
      },
      order: {
        id: "DESC"
      }
    });
  }

  async create(registerVisitDto: RegisterVisitDto) {
    const person = await this.registerPersonRepository.findOne({
      where: {
        name: registerVisitDto.personName
      }
    });

    await this.registerVisitRepository.query(
      `INSERT INTO register_visit (address, description, geom, person_id) VALUES ('${registerVisitDto.address}', '${registerVisitDto.description}', ST_GeomFromText('POINT(${registerVisitDto.coordinates[1]} ${registerVisitDto.coordinates[0]})', 4326), ${person.id})`
    );

    return await this.registerVisitRepository.find({
      where: {
        person: {
          name: registerVisitDto.personName
        }
      },
      relations: ["person"],
      order: {
        id: "DESC"
      }
    });
  }
}
