import { DataTypes, Model } from 'sequelize'
import sequelize from '../index'
import { Provider, UserAttributes } from '../interface/User.interface'

// User Class 정의
export class User extends Model<UserAttributes> {
  public readonly idx?: number
  public email!: string
  public password!: string
  public name!: string
  public provider!: Provider
  public providerId!: string

  // 생성 날짜, 수정 날짜 자동 생성
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  public static associations: {}
}

// DB에 초기화
User.init(
  {
    idx: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    providerId: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    modelName: 'User',
    // Table name
    tableName: 'tbl_user',
    sequelize,
    freezeTableName: true,
  },
)