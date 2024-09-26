import { useState } from 'react';
import { Card, Button, ListGroup, Modal, Form } from 'react-bootstrap';

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        profilePicture: "https://via.placeholder.com/150",
        tasks: [
            { id: 1, title: "Complete project report", completed: true },
            { id: 2, title: "Attend team meeting", completed: false },
        ]
    });

    const [showEditModal, setShowEditModal] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [showAddTask, setShowAddTask] = useState(false);

    // Toggle modal visibility
    const handleEditModalClose = () => setShowEditModal(false);
    const handleEditModalShow = () => setShowEditModal(true);

    // Function to update the user’s profile
    const handleProfileUpdate = (e) => {
        e.preventDefault();
        // Update the user profile here
        setShowEditModal(false);
    };

    // Add a new task
    const handleAddTask = () => {
        setUser({
            ...user,
            tasks: [...user.tasks, { id: user.tasks.length + 1, title: newTaskTitle, completed: false }]
        });
        setNewTaskTitle("");
        setShowAddTask(false);
    };

    return (
        <div className="container mt-4">
            <h1>Profile</h1>
            <Card className="mb-3">
                <Card.Body className="d-flex align-items-center">
                    <img
                        src={user.profilePicture}
                        alt="Profile"
                        className="rounded-circle me-3"
                        style={{ width: "100px", height: "100px" }}
                    />
                    <div>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                        <Button variant="primary" onClick={handleEditModalShow}>Edit Profile</Button>
                    </div>
                </Card.Body>
            </Card>

            <h3>Your Tasks</h3>
            <ListGroup>
                {user.tasks.map(task => (
                    <ListGroup.Item key={task.id} className={task.completed ? 'list-group-item-success' : ''}>
                        {task.title}
                        <span className="float-end">
                            {task.completed ? '✅ Completed' : '⏳ In Progress'}
                        </span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="success" className="mt-3" onClick={() => setShowAddTask(true)}>Add Task</Button>

            
            <Modal show={showEditModal} onHide={handleEditModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleProfileUpdate}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" defaultValue={user.name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" defaultValue={user.email} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

           
            {showAddTask && (
                <div className="mt-3">
                    <Form.Group controlId="formNewTask">
                        <Form.Control
                            type="text"
                            placeholder="Enter new task title"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                        />
                        <Button variant="primary" className="mt-2" onClick={handleAddTask}>Add Task</Button>
                        <Button variant="secondary" className="mt-2 ms-2" onClick={() => setShowAddTask(false)}>Cancel</Button>
                    </Form.Group>
                </div>
            )}
        </div>
    );
};

export default Profile;
