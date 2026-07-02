taskkill /F /IM httpd.exe
taskkill /F /IM mysqld.exe
taskkill /F /IM xampp-control.exe
taskkill /F /IM php.exe
dir C:\
rmdir /S /Q C:\xampp1
taskkill /F /IM explorer.exe
rmdir /S /Q C:\xampp1
start explorer.exe