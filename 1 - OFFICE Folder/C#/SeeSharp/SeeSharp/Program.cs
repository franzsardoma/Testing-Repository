using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeeSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            seeSharp();
            NewClass testClass = new NewClass();
            testClass.printNewClass();

            space.newSpace theF = new space.newSpace();
            theF.newNameSpace();


            ObjectTest testOOP = new ObjectTest();
            testOOP.objectTest1();
            testOOP.setStringVal("OOP");
            Console.WriteLine("BREAK");
            testOOP.printStringVal();
            Console.ReadLine();

        }
        static void seeSharp()
        {
            Console.Write("SEE SHARP!!");
        }

       
        }
    class ObjectTest
    {
        private String testString;

        public void objectTest1()
        {
            Console.WriteLine("WTFFF C#");
        }

        public void setStringVal(String val)
        {
            testString = val;
        }
        public void printStringVal()
        {
            Console.WriteLine(testString);
        }
    }
}
    
