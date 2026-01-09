
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// 1. Đối tượng student 
const student = {
    id: 1001,
    name: "Karina",
    avatar: "https://scontent.fdad8-2.fna.fbcdn.net/v/t39.30808-6/488000359_988734300049022_4439121795836330774_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EXCmA2iMUD8Q7kNvwERgFD5&_nc_oc=AdkykBvORSFEeLCnRHln-imfDNju4uMQyZV1ZASJ6Czm6nSAT5Of1Ggxw6tlPhX-JPE&_nc_zt=23&_nc_ht=scontent.fdad8-2.fna&_nc_gid=Pzt62YWNVU8M_49U8e_r5w&oh=00_AfonzsN3Od6nzvhPUHeLW5XZqGTPRjeobuU3EScjxjE0Ig&oe=6966B1E9", // Demo link ảnh
    grade: 10,
    point: 8.5
};

//
const StudentInfo = ({ data }) => {
    return (
        <>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.avatar} />
        <Card.Body>
            <Card.Title>
             <p>{data.id} - {data.name}</p>
            </Card.Title>
            <Card.Text>
                helohelohel
            </Card.Text>
            <Button variant="primary">See more</Button>
        </Card.Body>
        </Card>
        </>
    );
};


function About() {
    return (
        <div>
            <h2>About Student</h2>
            <StudentInfo data={student} />
        </div>
    );
}

export default About;