import {
  Typography,
  Container,
  Grid,
  Button,
  Box,
  Divider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@material-ui/core";
import {
  TextFieldsRounded,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";

import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

const faq = [
  {
    title: "Onde são lecionadas as aulas?",
    description: `O Now Club presta os seus serviços nas instalações do
    cliente, de modo a potenciar ao máximo o tempo dispendido
    para as aulas de inglês.
    
    O colaborador não terá que se deslocar para melhorar o seu
    nível actual.
    `,
  },
  {
    title: "Que níveis existem no Now Club?",
    description: `Todos os alunos Now Club farão um teste de nível, sem custo acrescido, 
    que permitirá saber o nível inicial de cada colaborador e, por conseguinte, em que
    turma deverá ser colocado. Os níveis apenas separam os alunos pelo seu nível de 
    conhecimento atual sendo que não há nenhum limite para o resultado final.
    Por norma, são abertas turma(s) de Intermédio e turma(s) de nível Avançado.`,
  },
  {
    title: "Existem horários e calendários pré-definidos?",
    description: `Não. No Now Club, adaptamo-nos totalmente ao funcionamento do cliente, pelo que a 
    elaboração de horários e calendários será feita em conjunto com a empresa, de modo a melhor servir as suas necessidades.`,
  },
  {
    title: "Quais os horários definidos?",
    description: `O Now Club presta os seus serviços em qualquer horário, desde que compreendido entre as 08h e as 20h.`,
  },
  {
    title: "Qual a duração do curso?",
    description: `Também neste campo a adaptação ao cliente é total, pelo que a extensão do curso variará consoante 
    disponibilidade de horários e calendários, próprios de cada empresa, assim como dos níveis existentes.`,
  },
  {
    title: "Como posso fazer os pagamentos?",
    description: `Com base em experiências anteriores, existem vários modos de actuação relativamente ao 
    processamento de pagamentos.
    Estes poderão ser da total responsabilidade da empresa, da total responsabilidade do colaborador (a empresa apenas cede
    o espaço e acesso às aulas) ou pode a entidade empregadora comparticipar, em parte, na mensalidade do colaborador.`,
  },
  {
    title: "Tenho direito a um certificado?",
    description: `Sim. O Now Club separa as turmas em nível Intermédio e Avançado, no entanto, no certificado final 
    irá constar o nível de acordo com o Quadro Europeu de Referência (escala de A1 a C2)`,
  },
];

export default function Contact() {
  const { typography } = useTheme();

  return (
    <>
      <Nav />
      <Container>
        <Box py={6}>
          <Grid container>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <Box textAlign="center" py={3}>
                <Typography variant="h4" gutterBottom>
                  Can't find the answer you need?
                </Typography>
                <Typography variant="subtitle1">Ask us anything!</Typography>
              </Box>

              <Box py={3}>
                <Grid container direction="column" spacing={2} justify="center">
                  <Grid item>
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      required
                    ></TextField>
                  </Grid>

                  <Grid item>
                    <TextField
                      name="name"
                      label="Message"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={6}
                    ></TextField>
                  </Grid>

                  <Grid item>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Divider />

      <Container>
        <Box py={6}>
          <Typography variant="h4" align="center">
            Frequently Asked Questions
          </Typography>

          <Box py={6}>
            {faq.map(({ title, description }) => (
              <Accordion variant="outlined">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    style={{
                      fontWeight: typography.fontWeightBold,
                    }}
                  >
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>{description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>

      <Footer></Footer>
    </>
  );
}
