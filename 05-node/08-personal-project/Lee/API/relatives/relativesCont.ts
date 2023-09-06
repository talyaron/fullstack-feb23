import { users } from '../users/userModel';
import { relatives, Relation, Relative, userRelatives, UserRelatives } from './relativesModel';

export function getRelatives(req: any, res: any) {
    try {
        res.send({ relatives });
    } catch (error) {
        console.error(error);
    }
}

export function addRelative(req: any, res: any) {
    try {
        const { fullName, country, email } = req.body;
        console.log({ fullName, country, email })
        if (!fullName || !country) throw new Error("Please complete all fields");
        if (!email) throw new Error("no email");

        const newRelative = new Relative(fullName, country, Relation.choose);
        relatives.push(newRelative);

        //find user
        const user = users.find((user: any) => user.email === email);
        if (!user) throw new Error("user not found");

        userRelatives.push(new userRelatives(user, newRelative));
        console.log(userRelatives);
        const userRelatives = userRelatives.filter((userrelative) => userrelative.user.email === email);

        const _relatives = _userRelatives.map((userrelative) => userrelative.relative); //returns only relatives of user

        res.send({ relatives: _relatives });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function deleteRelative(req: any, res: any) {
    try {
        const { id } = req.body;
        const index = relatives.findIndex((relative) => relative.id === id);
        if (index === -1) {
            throw new Error("relative not found");
        }
        relatives.splice(index, 1);
        res.send({ relatives });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export function updateRelation(req: any, res: any) {
    try {
        const { id, relation } = req.body;
        const index = relatives.findIndex((relative) => relative.id === id);
        if (index === -1) {
            throw new Error("relative not found");
        }
        // if (status !== relation.done && status !== TaskStatus.todo) {
        //     throw new Error("status not valid");
        // }
        relatives[index].changeRelation(relation);
        res.send({ relatives });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
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