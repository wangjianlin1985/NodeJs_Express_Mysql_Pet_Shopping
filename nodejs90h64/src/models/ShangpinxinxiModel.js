import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 商品信息
const ShangpinxinxiModel = sequelize.define('ShangpinxinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shangpinmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品名称'
	},
	shangpinleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品类型'
	},
	shangpintupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品图片'
	},
	shangpinguige: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '商品规格'
	},
	shangpinjianjie: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '商品简介'
	},
	shangpinxiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '商品详情'
	},
	shengchandi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '生产地'
	},
	yuancailiao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '原材料'
	},
	shangjiariqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('shangjiariqi')).format('YYYY-MM-DD')
        },
		comment: '上架日期'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '最近点击时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	price: {
		type: DataTypes.FLOAT,
		defaultValue: 0,
		allowNull: true,
		comment: '价格'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'shangpinxinxi'
})

export default ShangpinxinxiModel
