const express = require('express')
const router = express.Router()

const f1n1 = require("../models/f1n1");
const f1n2 = require("../models/f1n2");
const f1n3 = require("../models/f1n3");
const f1n4 = require("../models/f1n4");
const f1n5 = require("../models/f1n5");
const f1n6 = require("../models/f1n6");
const f2n1 = require("../models/f2n1");
const f2n2 = require("../models/f2n2");
const f2n3 = require("../models/f2n3");
const f2n4 = require("../models/f2n4");
const f2n5 = require("../models/f2n5");
const f2n6 = require("../models/f2n6");
const f3n1 = require("../models/f3n1");
const f3n2 = require("../models/f3n2");
const f3n3 = require("../models/f3n3");
const f3n4 = require("../models/f3n4");
const f3n5 = require("../models/f3n5");
const f3n6 = require("../models/f3n6");

// index

router.get("/:num", (req, res) => {
    const num = req.params.num

    if (num == "f1n1") {
        f1n1.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n2") {
        f1n2.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n3") {
        f1n3.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n4") {
        f1n4.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n5") {
        f1n5.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n6") {
        f1n6.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n1") {
        f2n1.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n2") {
        f2n2.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n3") {
        f2n3.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n4") {
        f2n4.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n5") {
        f2n5.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n6") {
        f2n6.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n1") {
        f3n1.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n2") {
        f3n2.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n3") {
        f3n3.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n4") {
        f3n4.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n5") {
        f3n5.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n6") {
        f3n6.find()
            .sort({ "name": 1 })
            .then((result) => {
                res.render("index", { item: result, num: num });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else {
        res.redirect("/")
    }
});


router.post("/:num", (req, res) => {
    const num = req.params.num
    if (num == "f1n1") {
        const article = new f1n1(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f1n1");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n2") {
        const article = new f1n2(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f1n2");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n3") {
        const article = new f1n3(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f1n3");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n4") {
        const article = new f1n4(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f1n4");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n5") {
        const article = new f1n5(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f1n5");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f1n6") {
        const article = new f1n6(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f1n6");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n1") {
        const article = new f2n1(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f2n1");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n2") {
        const article = new f2n2(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f2n2");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n3") {
        const article = new f2n3(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f2n3");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n4") {
        const article = new f2n4(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f2n4");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n5") {
        const article = new f2n5(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f2n5");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f2n6") {
        const article = new f2n6(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f2n6");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n1") {
        const article = new f3n1(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f3n1");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n2") {
        const article = new f3n2(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f3n2");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n3") {
        const article = new f3n3(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f3n3");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n4") {
        const article = new f3n4(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f3n4");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    else if (num == "f3n5") {
        const article = new f3n5(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f3n5");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    else if (num == "f3n6") {
        const article = new f3n6(req.body);

        // console.log(req.body)

        article
            .save()
            .then((result) => {
                res.redirect("/f3n6");
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        res.redirect("/")
    }

});


module.exports = router