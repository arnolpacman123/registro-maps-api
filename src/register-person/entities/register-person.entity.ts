import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RegisterVisitEntity } from "../../register-visit/entities/register-visit.entity";

@Entity({
  name: "register_person"
})
export class RegisterPersonEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @OneToMany(() => RegisterVisitEntity, visit => visit.person)
  visits?: RegisterVisitEntity[];
}