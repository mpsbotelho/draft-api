import { Model, Table, Column, Unique } from "sequelize-typescript";

@Table({ tableName: "users" })
export class UserDb extends Model<UserDb> {
  @Column({
    autoIncrement: true,
    primaryKey: true
  })
  public id: number;

  @Unique
  @Column
  public email: string;

  @Column({ field: "first_name" })
  public firstName: string;

  @Column({ field: "last_name" })
  public lastName: string;

}
