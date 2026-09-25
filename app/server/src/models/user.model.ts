import { Schema, model } from "mongoose"

const userSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['active', 'in-active'],
        default: 'in-active'
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    lastLoginAt: {
        type: Date,
    }

}, {
    timestamps: true
});

export const SUser = model('User', userSchema);