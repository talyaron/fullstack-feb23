import { users, UserModel  } from '../users/userModel';
import { relatives, Relative, userRelatives, UserRelatives, RelativeModel } from './relativesModel';
import { Relation } from '../enums/relations'


export async function getFamilyMembers(req: any, res: any) {
    try {
        // Find all relatives and populate the 'user' field to get user details
        const relativesDB = await RelativeModel.find({}).populate('user').exec();

        // Map the relatives data to include user information
        const relativesWithUsers = relativesDB.map((relative) => {
            const user = relative.user;
            return {
                id: relative._id,
                fullName: relative.fullName,
                birthDate: relative.birthDate,
                country: relative.country,
                relation: relative.relation,
                user: {
                    _id: user._id,
                    userName: user.userName,
                    gender: user.gender,
                    email: user.email,
                },
            };
        });

        res.send({ relatives: relativesWithUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function addRelative(req: any, res: any) {
    try {
        const { fullName, birthDate, country, relation, userEmail } = req.body;

        if (!fullName || !country || !birthDate || !relation) {
            return res.status(400).send({ error: "Please complete all fields" });
        }

        
        const user = await UserModel.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).send({ error: "User not found with the provided email" });
        }

        const newRelative = new RelativeModel({
            fullName,
            birthDate,
            country,
            relation,
            user: user._id, // Associate the relative with the user based on userEmail
        });

        const relativeDB = await newRelative.save();
        
        console.log(relativeDB);

        res.status(201).send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}


export async function deleteRelative(req: any, res: any) {
    try {
        const { id } = req.body;
        const relativeDB = await RelativeModel.findByIdAndDelete(id);
        res.send({ relativeDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updateRelation(req: any, res: any) {
    try {
        const { id, relation } = req.body;
        const relative = await RelativeModel.findById(id)
        if (!relative) {

            throw new Error("relative not found")
        }
        if (relation === Relation.choose) {
            throw new Error("Please choose a valid relation")
        }

        relative.relation = relation
        await relative.save()

        res.send({ message: "Relation updated successfully", relative });
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
}

export async function getUserRelatives(req: any, res: any) {
    try {
        //get email from query
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new Error("User not found with the provided email");
        }

        // Get user's relatives
        const relativeDB = await RelativeModel.find({ user: user._id });
        res.send({ relatives: relativeDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}