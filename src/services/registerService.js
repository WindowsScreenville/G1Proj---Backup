import db from "../configs/connectDB";
import bcryptjs from "bcryptjs";

let createNewUser = (user) => {
    return new Promise(async(resolve, reject) => {
        try {
            let fullname = await assembleName(user.firstname, user.middlename, user.lastname, user.extension);
            let has_same = await checkFullName(fullname); 
            
            if (has_same) {
                reject("Inputted name already exists!");
            }

            else {
                // Hash the password
                let hashed_password = hashPassword(user.password); 
                let data = {
                    username: createUsername(user.firstname, user.lastname, user.extension),
                    password: hashed_password,
                    firstname: user.firstname,
                    middlename: user.middlename,
                    lastname: user.lastname,
                    extension: user.extension,
                    sex: user.sex,
                    age: user.age,
                    birthday: user.birthday,
                    address: user.address,
                    mobilenum: user.mobilenum,
                    kind: user.kind,
                    studidnum: user.studidnum,
                    courseyearsec: user.courseyearsec,
                    emplyidnum: user.emplyidnum
                }
                console.log(data.username);
                console.log(data.password);

                db.query("INSERT INTO users SET ?",  {username: data.username, password: data.password, first_name: data.firstname, middle_name: data.middlename, last_name: data.lastname, extension: data.extension, sex: data.sex, age: data.age, birthday: data.birthday, home_address: data.address, mobile_number: data.mobilenum, user_type: data.kind, student_id: data.studidnum, course_year_sec: data.courseyearsec, employee_id: data.emplyidnum}, function(error, rows) {
                    if (error) {
                        reject(error);
                    }
                    resolve(data.username);
                })
            }
        }

        catch (e) {
            reject(e); 
        } 
    });
};

let assembleName = (firstname, middlename, lastname, extension) => {
    let fullname = firstname;
    if (!middlename == "") {
        fullname = fullname + " " + middlename;
    }

    fullname = fullname + " " + lastname;

    if (extension == "") {
        fullname = fullname + " " + extension;
    }

    return fullname;
};

let checkFullName = (fullname) => {
    return new Promise (((resolve, reject) => {
        try {
            db.query("SELECT * FROM users  WHERE CONCAT_WS(' ', first_name, middle_name, last_name, extension) = ?", fullname, function(error, rows) {
                if (error) {
                    reject(error);
                }

                if (rows.length > 0) {
                    resolve (true);
                }

                else {
                    resolve (false);
                }
            })
        }

        catch (e) {
            reject(e);
        }
    }));
};

let createUsername = (firstname, lastname, extension) => {
    firstname = firstname.replace(/\s+/g, '');
    lastname = lastname.replace(/\s+/g, '');
    extension = extension.replace(/\.$/, '');
    createRegisterFlash(lastname.toLowerCase() + "." + firstname.toLowerCase() + extension.toLowerCase());
    return lastname.toLowerCase() + "." + firstname.toLowerCase() + extension.toLowerCase();
};

let createRegisterFlash = (username) => {
    var message = "You have successfully signed up! Your username is " + username;
    return username;
};

let hashPassword = (password) => {
    let salt = bcryptjs.genSaltSync(10); 
    return bcryptjs.hashSync(password, salt);
};



module.exports = {
    createNewUser: createNewUser,
    createRegisterFlash: createRegisterFlash
};