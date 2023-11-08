const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const articleSchema = new Schema({
    //الإسم
    name: String,
    //السلوك
    slock: String,
    //رقم التعديل
    num: Number,
    //درجة الإختبار النضري القصير
    agnNum: String,
    //درجة أدوات التقييم المتنوع
    atmNum: String,
    //درجة الإختبار قصير عملي
    ag5Num: String,
    //الإختبار النهائي
    aaNum: String,
    //ملاحظات
    mulahazat: String,
    //واجبات
    wajebat: String,
    // mutabah
    mutabah: Array,
});


// Create a model based on that schema
const Article = mongoose.model("f2n4", articleSchema);


// export the model
module.exports = Article; 