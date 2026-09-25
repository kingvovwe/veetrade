import { Schema, model } from 'mongoose'

const organizationSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    ownerID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    status: {
        type: String,
        enum: ['active', 'in-active'],
        default: 'in-active'
    }
}, {
    timestamps: true
});

export const SOrganization = model('Organization', organizationSchema);





