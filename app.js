import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const router = express.Router();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://dbUser:novoscaminhos@cluster0.qdclc.mongodb.net/todoapp?retryWrites=true&w=majority",{  
//mongoose.connect("mongodb://localhost/novoscaminhos",{  
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("conexao ok");
});

const todoSchema = mongoose.Schema({
  text: String,
  checked: Boolean,
  id: Number
});

mongoose.model('todos', todoSchema);

const TodoModel = mongoose.model('todos');

router.get('/', async (req, res) => {
    const todoArray = await TodoModel.find({});

    res.send(todoArray);
});


router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const todo = await TodoModel.find({id: id});

    if(todo){
        res.send(todo);
    }else{
        res.status(404).end();
    }

});

router.get('/mongodb/:id', async (req, res) => {
   
    const id = req.params.id;

    const todo = await TodoModel.find({_id: id});

    if(todo){
        res.send(todo);
    }else{
        res.status(404).end();
    }

});

router.post('/', async (req, res) => {
    const todoBody = req.body;

    console.log(req.body);

    //console.log('body:' + JSON.stringify(todoBody));

    if(!todoBody.id){
        todoBody.id = Date.now();
    }

    const todoOk = await TodoModel.create(todoBody);

    res.status(201).send(todoOk);

});

router.put('/:id', async (req, res) => {
    
    const id = req.params.id;
    const bodyTodo = req.body;

    await TodoModel.updateOne({id: id}, {...bodyTodo})
    
    const todoUpdate = await TodoModel.find({id: id});

    res.send(todoUpdate);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    console.log('id:'+id)

    await TodoModel.deleteOne({id:id});

    res.status(204).end();
});

router.delete('/delete/all', async (req, res) => {
    const id = req.params.id;

    await TodoModel.deleteMany();

    res.status(204).end();
});

app.use('/todo', router);

app.listen(process.env.PORT || 5000, async () => {
    console.log('listening port 5000');
});