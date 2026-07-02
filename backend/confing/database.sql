CREATE DATABASE gastos

CREATE TABLE categoria (
    ct_id INT PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(50)
)

CREATE TABLE transacciones(
    ts_id INT PRIMARY KEY AUTOINCREMENT,
    monto DECIMAL,
    categoria_id int,
    fecha DATE
    FOREIGN KEY (categoria_id) REFERENCES categoria(ct_id)
)


use gastos

select * from transacciones



insert into categoria(nombre) values('alimentacion'),
('salario'), ('transporte')


insert into transacciones(monto,ct_id,fecha)
values(1000,1,'2026-05-26'),
(10000,2,'2026-05-26'),(1000,3,'2026-05-26')