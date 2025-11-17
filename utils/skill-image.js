import docker from '../app/assets/svg/skills/docker.svg';
import git from '../app/assets/svg/skills/git.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import selenium from '../app/assets/svg/skills/selenium.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg'
import fastapi from '../app/assets/svg/skills/fastapi.svg'
import kafka from '../app/assets/svg/skills/kafka.svg'
import spark from '../app/assets/svg/skills/spark.svg'
import debezium from '../app/assets/svg/skills/debezium.svg'
import dbt from '../app/assets/svg/skills/dbt.svg'
import sqlmesh from '../app/assets/svg/skills/sqlmesh.svg'
import dlt from '../app/assets/svg/skills/dlt.svg'
import meltano from '../app/assets/svg/skills/meltano.svg'
import powerbi from '../app/assets/svg/skills/powerbi.svg'
import superset from '../app/assets/svg/skills/superset.svg'
import googlesheets from '../app/assets/svg/skills/googlesheets.svg'
import n8n from '../app/assets/svg/skills/n8n.svg'
import keycloak from '../app/assets/svg/skills/keycloak.svg'



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'docker':
      return docker;
    case 'react':
      return react;
    case 'tailwind':
      return tailwind;
    case 'python':
      return python;
    case 'git':
      return git;
    case 'selenium':
      return selenium;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'fastapi':
      return fastapi;
    case 'apache kafka':
      return kafka;
    case 'kafka':
      return kafka;
    case 'spark':
      return spark;
    case 'apache spark':
      return spark;
    case 'debezium':
      return debezium;
    case 'dbt':
      return dbt;
    case 'sqlmesh':
      return sqlmesh;
    case 'dlt':
      return dlt;
    case 'meltano':
      return meltano;
    case 'power bi':
      return powerbi;
    case 'apache superset':
      return superset;
    case 'superset':
      return superset;
    case 'google sheets':
      return googlesheets;
    case 'n8n':
      return n8n;
    case 'keycloak':
      return keycloak;
    default:
      return python; 
  }
}
