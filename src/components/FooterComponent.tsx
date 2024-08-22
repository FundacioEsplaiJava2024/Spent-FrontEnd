import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const logoStyle = {
    width: '100px',
    height: 'auto',
};

function Copyright() {
    return (
        <Typography color="text.secondary" mt={1} sx={{  fontSize: '12px'}}>
            {'Copyright © '}
            <Link href="https://mui.com/">SPENT&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
                fontFamily: 'Roboto', 
                fontSize: '12px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    borderTop: '1px solid',
                    pt: { xs: 4, sm: 5 },
                    borderColor: 'divider',
                }}
            >

                <Box sx={{ width: { xs: '100%', sm: '60%', maxWidth: '40%' } }}>
                    <Box sx={{ ml: '-15px', 
                        textAlign: 'left', 
                        marginTop: '10px', 
                        marginLeft: '1px', 
                        marginBottom: 1}}>
                        <img
                            src={
                                './SPENT.png'
                            }
                            style={logoStyle}
                            alt="logo of SPENT"
                        />
                    </Box>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                        Spent is a web application designed for sports enthusiasts of all kinds.
                        This platform allows users to create and join these sports events, promoting health and the creation of sustainable local communities.
                    </Typography>

                    <div>
                        <Link color="text.secondary" href="#">
                            Privacy Policy
                        </Link>
                        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
                            &nbsp;•&nbsp;
                        </Typography>
                        <Link color="text.secondary" href="#">
                            Terms of Service
                        </Link>
                        <Copyright />

                    </div>
                </Box>


                <Box sx={{ display: 'flex', marginLeft: 10 }}>
                    <Box sx={{ flexBasis: '25%', padding: 2 }}>
                        <Typography fontWeight={600}>
                            David
                        </Typography>
                        <Link href="https://github.com/davidfreixes" sx={{ textDecoration: 'none', color: 'black' }}>
                            <IconButton
                                href="https://github.com/davidfreixes"
                                aria-label="GitHub"
                                sx={{ alignSelf: 'center', color: 'black' }}
                            >
                                <GitHubIcon />
                            </IconButton>
                            GitHub <br />
                        </Link>
                        <Link href="https://www.linkedin.com/in/david-freixes/" sx={{ textDecoration: 'none' }}>
                            <IconButton
                                color="inherit"
                                href="https://www.linkedin.com/in/david-freixes/"
                                aria-label="LinkedIn"
                                sx={{ alignSelf: 'center' }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            Linkedin <br />
                        </Link>
                    </Box>
                    <Box sx={{ flexBasis: '25%', padding: 2 }}>
                        <Typography fontWeight={600}>
                            Joël
                        </Typography>
                        <Link href="https://github.com/Jaranag" sx={{ textDecoration: 'none', color: 'black' }}>
                            <IconButton
                                color="inherit"
                                href="https://github.com/Jaranag"
                                aria-label="GitHub"
                                sx={{ alignSelf: 'center', color: 'black' }}
                            >
                                <GitHubIcon />
                            </IconButton>
                            GitHub <br />
                        </Link>
                        <Link href="https://www.linkedin.com/in/joel-arana-gregori/" sx={{ textDecoration: 'none' }}>
                            <IconButton
                                color="inherit"
                                href="https://www.linkedin.com/in/joel-arana-gregori/"
                                aria-label="LinkedIn"
                                sx={{ alignSelf: 'center' }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            Linkedin
                        </Link>
                    </Box>
                    <Box sx={{ flexBasis: '25%', padding: 2 }}>
                        <Typography fontWeight={600}>
                            Izar
                        </Typography>
                        <Link href="https://github.com/IzarReina" sx={{ textDecoration: 'none', color: 'black' }}>
                            <IconButton
                                color="inherit"
                                href="https://github.com/IzarReina"
                                aria-label="GitHub"
                                sx={{ alignSelf: 'center', color: 'black' }}
                            >
                                <GitHubIcon />
                            </IconButton>
                            GitHub <br />
                        </Link>
                        <Link href="https://www.linkedin.com/in/izar-reina/" sx={{ textDecoration: 'none' }}>
                            <IconButton
                                color="inherit"
                                href="https://www.linkedin.com/in/izar-reina/"
                                aria-label="LinkedIn"
                                sx={{ alignSelf: 'center' }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            Linkedin
                        </Link>
                    </Box>
                    <Box sx={{ flexBasis: '25%', padding: 2 }}>
                        <Typography fontWeight={600}>
                            Daniela
                        </Typography>
                        <Link href="https://github.com/Daniela-RL" sx={{ textDecoration: 'none', color: 'black' }}>
                            <IconButton
                                color="inherit"
                                href="https://github.com/Daniela-RL"
                                aria-label="GitHub"
                                sx={{ alignSelf: 'center', color: 'black' }}
                            >
                                <GitHubIcon />
                            </IconButton>
                            GitHub <br />
                        </Link>
                        <Link href="https://www.linkedin.com/in/daniela-rodriguez-lainez/" sx={{ textDecoration: 'none' }}>
                            <IconButton
                                color="inherit"
                                href="https://www.linkedin.com/in/daniela-rodriguez-lainez/"
                                aria-label="LinkedIn"
                                sx={{ alignSelf: 'center' }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            Linkedin
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}