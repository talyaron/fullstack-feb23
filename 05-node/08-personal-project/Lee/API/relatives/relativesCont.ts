import { users } from '../users/userModel';
import { relatives, Relative, userRelatives, UserRelatives, RelativeModel } from './relativesModel';
import { Relation } from '../enums/relations'


export async function getFamilyMembers(req: any, res: any) {
    try {
        const relativesDB = await RelativeModel.find({})
        res.send({ relatives: relativesDB });
    } catch (error) {
        console.error(error);
    }
}

export async function addRelative(req: any, res: any) {
    try {
        const { fullName, birthDate, country, email } = req.body;

        if (!fullName || !country || !birthDate || !email) {
            return res.status(400).send({ error: "Please complete all fields" })
        }

        const user = users.find((user: any) => user.email === email);
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        const newRelative = new RelativeModel({
            fullName,
            birthDate,
            country,
            relation: Relation.choose, // You can set the relation as needed
            user: user._id
        });

        const relativeDB = await newRelative.save();
        console.log(relativeDB);

        res.send({ ok: true })
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

export function getUserRelatives(req: any, res: any) {
    try {
        //get email from query
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        //get user relatives
        const _userrelatives = userRelatives.filter((userrelative) => userrelative.user.email === email);
        const _relatives = _userrelatives.map((userrelative) => userrelative.user); //returns only relatives of user

        res.send({ relatives: _relatives });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}