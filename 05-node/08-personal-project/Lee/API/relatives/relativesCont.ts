import { users } from '../users/userModel';
import { relatives, Relation, Relative, userRelatives, UserRelatives, RelativeModel } from './relativesModel';

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
        console.log({ fullName, birthDate, country, email })
        if (!fullName || !country || !birthDate) throw new Error("Please complete all fields");
        if (!email) throw new Error("no email");

        const newRelative = new RelativeModel(fullName, birthDate, country);
        const relativeDB = await newRelative.save();
        console.log(relativeDB);

        //find user
        // const user = users.find((user: any) => user.email === email);
        // if (!user) throw new Error("user not found");

        // const newUserRelative = new UserRelatives(user, newRelative); 
        // userRelatives.push(newUserRelative);
        // console.log(userRelatives);

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


        // const index = relatives.findIndex((relative) => relative.id === id);
        // if (index === -1) {
        //     throw new Error("relative not found");
        // }
        // relatives.splice(index, 1);
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