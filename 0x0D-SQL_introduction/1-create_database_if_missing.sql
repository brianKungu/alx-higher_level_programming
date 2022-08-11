-- script that creates database hbtn_0c_0
-- does not fail

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'hbtn_0c_0')
BEGIN
  CREATE DATABASE hbtn_0c_0;
END;
GO