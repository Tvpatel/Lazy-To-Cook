const Model = require("../../framework/Model");

class UserModel extends Model {
    constructor(/* string */ id, 
                /* string */ firstName, 
                /* string */ middleName, 
                /* string */ lastName, 
                /* string */ dateOfBirth, 
                /* string */ email) {
        super(id);
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
    }

    fullName() {
        if (this.middleName && this.middleName.length) {
            return `${this.firstName} ${middleName} ${lastName}`.trim();
        } else {
            return `${this.firstName} ${lastName}`.trim();
        }
    }
}

module.exports = UserModel;