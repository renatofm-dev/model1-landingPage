import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "./contato.module.scss";
import Button from "../button/index";
import Input from "../input";
import Select from "../select";
import { Loading } from "../loading/index";
import { SuccessModal } from "../successModal";
import { FailModal } from "../failModal/index";

const Contato = () => { 
  const [isloading, setLoading] = useState(false);
  const [successModal, setModalSuccess] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      // website: "",
      midia: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Campo Obrigatório"),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Campo Obrigatório"),
      phone: Yup.string()
        .matches("", "Digite um telefone válido")
        .required("Campo Obrigatório"),
      // website: Yup.string().required("Campo Obrigatório"),
      midia: Yup.string().required("Campo Obrigatório"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => handleSubmitForm(values),
  });

  /*   formik?.errors -> Pode ser utilizado para dar feedback no campo e para o usuario*/

  const handleSubmitForm = (values) => {
    console.log('teste', values);
    setLoading(true);
    axios
      .post("/api/sendEmail", {
        messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Patrimônio: ${values.midia}`,
      })
      .then(() => {
        formik.resetForm();
        setLoading(false);
        setModalSuccess(true);
      })
      .catch(() => {
        setLoading(false);
        setFailModal(true);
      });
  };

  const closeModal = () => {
    setFailModal(false);
    setModalSuccess(false);
  };

  return (
    <>
      {successModal && <SuccessModal closeModal={closeModal} />}
      {failModal && <FailModal closeModal={closeModal} />}
      {isloading && <Loading />}
      <div className={Styles.container} id="contato">
        <div className={Styles.texts}>
          <span>CONTRATE HOJE SUA HOLDING FAMILIAR</span>
          <h1>Proteja seu Patrimônio de Execuções Judiciais</h1>
          <p>
            Faça como os melhores, planeje hoje sua Holding Familiar com um Especialista.
          </p>
        </div>
        <div className={Styles.form}>
          <h1>Faça seu orçamento com um especialista</h1>

          <form id="formulario" onSubmit={formik.handleSubmit}>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Nome completo"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              required
            />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="Celular/Whatsapp"
              pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              required
            />
            {/* <Input
              id="website"
              name="website"
              type="text"
              placeholder="Site"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.website}
              required
            /> */}
            <Select
              id="midia"
              name="midia"
              placeholder="Patrimônio Aproximado"
              options={[
                { label: "Menos de R$ 1.000.000", value: "menosde1milhao" },
                { label: "R$ 1.000.000", value: "1milhao" },
                { label: "R$ 3.000.000", value: "3milhoes" },
                { label: "R$ 5.000.000", value: "5milhoes" },
                { label: "R$ 10.000.000", value: "10milhoes" },
                { label: "Mais de R$ 10.000.000", value: "maisde10milhoes" },
                { label: "Não Informar", value: "naoinformar" },
              ]}
              onChange={formik.handleChange}
              value={formik.values.midia}
              required
            />

            <Button type="submit" title="Enviar" kind="full" />
          </form>
        </div>
        <div className={Styles.footer}>
          <p>
            Ao enviar esse formulário, você reconhece que leu e concorda com a
            nossa
            <Link href="/">
              <span> Política de Privacidade.</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contato;
