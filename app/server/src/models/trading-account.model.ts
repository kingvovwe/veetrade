import { Schema, model } from 'mongoose';

const tradingAccountSchema = new Schema({
    organizationID: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },

    name: {
        type: String,
        required: true
    },

    accountType: {
        type: String,
        required: true
    },

    brokerConnectionID: {
        type: String,
        required: true
    },

    currency: {
        type: String,
        enum: ['usd', 'euro', 'naira'],
        default: 'usd'
    },

    initialBalance: {
        type: Schema.Types.Decimal128,
        required: true,
        default: 0
    },

    currentBalance: {
        type: Schema.Types.Decimal128,
        required: true,
        default: 0
    },

    equity: {
        type: Schema.Types.Decimal128,
        required: true,
        default: 0
    },

    status: {
        type: String,
        enum: ['active', 'inactive', 'suspended'],
        default: 'active'
    }

}, {
    timestamps: true
});

export const STradingAccount = model('TradingAccount', tradingAccountSchema);