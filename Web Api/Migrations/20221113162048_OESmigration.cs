using Microsoft.EntityFrameworkCore.Migrations;

namespace OnlineEducationSystem.Migrations
{
    public partial class OESmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TblAttendances",
                columns: table => new
                {
                    Attendance_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Student_ID = table.Column<int>(type: "int", nullable: false),
                    StudentName = table.Column<string>(type: "varchar(20)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblAttendances", x => x.Attendance_ID);
                });

            migrationBuilder.CreateTable(
                name: "TblCourses",
                columns: table => new
                {
                    Course_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Course_Title = table.Column<string>(type: "varchar(20)", nullable: true),
                    Course_Discription = table.Column<string>(type: "varchar(50)", nullable: true),
                    Price = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblCourses", x => x.Course_ID);
                });

            migrationBuilder.CreateTable(
                name: "TblEnrollments",
                columns: table => new
                {
                    Enroll_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Student_ID = table.Column<int>(type: "int", nullable: false),
                    Course_ID = table.Column<int>(type: "int", nullable: false),
                    Grade = table.Column<string>(type: "char(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblEnrollments", x => x.Enroll_ID);
                });

            migrationBuilder.CreateTable(
                name: "TblPayments",
                columns: table => new
                {
                    Pay_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Card_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Card_Number = table.Column<long>(type: "bigint", nullable: false),
                    Mobile = table.Column<long>(type: "bigint", nullable: false),
                    Ex_Month = table.Column<int>(type: "int", nullable: false),
                    Ex_Year = table.Column<int>(type: "int", nullable: false),
                    CVV = table.Column<int>(type: "int", nullable: false),
                    Amount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblPayments", x => x.Pay_ID);
                });

            migrationBuilder.CreateTable(
                name: "TblQuizs",
                columns: table => new
                {
                    Quiz_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "varchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblQuizs", x => x.Quiz_ID);
                });

            migrationBuilder.CreateTable(
                name: "TblStudents",
                columns: table => new
                {
                    Student_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Student_Name = table.Column<string>(type: "varchar(20)", nullable: true),
                    Email_ID = table.Column<string>(type: "varchar(25)", nullable: true),
                    UserName = table.Column<string>(type: "varchar(15)", nullable: false),
                    Password = table.Column<string>(type: "varchar(15)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblStudents", x => x.Student_ID);
                });

            migrationBuilder.CreateTable(
                name: "TblTeachers",
                columns: table => new
                {
                    Teacher_ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Teacher_Name = table.Column<string>(type: "varchar(20)", nullable: true),
                    Email_ID = table.Column<string>(type: "varchar(25)", nullable: true),
                    UserName = table.Column<string>(type: "varchar(15)", nullable: false),
                    Password = table.Column<string>(type: "varchar(15)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblTeachers", x => x.Teacher_ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TblAttendances");

            migrationBuilder.DropTable(
                name: "TblCourses");

            migrationBuilder.DropTable(
                name: "TblEnrollments");

            migrationBuilder.DropTable(
                name: "TblPayments");

            migrationBuilder.DropTable(
                name: "TblQuizs");

            migrationBuilder.DropTable(
                name: "TblStudents");

            migrationBuilder.DropTable(
                name: "TblTeachers");
        }
    }
}
