// string using BACKTICK and MULTI LINE STRING
let username = `CDAC`;
let username1 = "CDAC";

let desc =
  "This is some story, which begins, early mornign, " +
  " asdfasdf asdfasf pepple not joingin on timeingadsfasd " +
  " asdfafasdfjj ma sdfasdfas fm,dsafasdnfasd,f asd;fnlkasdfasd" +
  " fasdfasdf asdf;asdfdsaf asd fasdf";

// BACKTICK
let desc1 = `This is some story, which begins, early mornign, 
            asdfasdf asdfasf pepple not joingin on timeingadsfasd 
            asdfafasdfjj ma sdfasdfas fm,dsafasdnfasd,f asd;
            fnlkasdfasd asdfafasdfjj ma sdfasdfas fm,dsafasdnfasd,f 
            asd;fnlkasdfasdasdfafasdfjj ma sdfasdfas fm,dsafasdnfasd,f 
            asd;fnlkasdfasd asdfafasdfjj ma sdfasdfas 
            fm,dsafasdnfasd,f asd;fnlkasdfasd`;

let sql =
  "SELECT USNAMRE, PASSWORD, EMAIL, MOBILE " +
  "FROM USER JOIN ADDRESS " +
  "WHERE USERNAM.ID = ADDERSS.UID and USERID=5";

let sql1 = `SELECT USNAMRE, PASSWORD, EMAIL, MOBILE 
            FROM USER JOIN ADDRESS 
            WHERE USERNAM.ID = ADDERSS.UID and USERID=5 `;
