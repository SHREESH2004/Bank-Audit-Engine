db.students.insertOne({
    name: "Arnab",
    age: 20,
    course: "B.Tech"
});
db.students.find();
db.students.find({ name: "Arnab" });
db.students.updateOne(
    { name: "Arnab" },
    { $set: { age: 21 } }
);
db.students.deleteOne({ name: "Arnab" });