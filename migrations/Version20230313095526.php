<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230313095526 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE app_training_letter (id INT AUTO_INCREMENT NOT NULL, letter_id INT DEFAULT NULL, training_id INT DEFAULT NULL, score INT NOT NULL, INDEX IDX_E7340CEC4525FF26 (letter_id), INDEX IDX_E7340CECBEFD98D1 (training_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_training (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, slug VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE app_training_letter ADD CONSTRAINT FK_E7340CEC4525FF26 FOREIGN KEY (letter_id) REFERENCES app_letter (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_training_letter ADD CONSTRAINT FK_E7340CECBEFD98D1 FOREIGN KEY (training_id) REFERENCES app_training (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_training_letter DROP FOREIGN KEY FK_E7340CECBEFD98D1');
        $this->addSql('DROP TABLE app_training_letter');
        $this->addSql('DROP TABLE app_training');
    }
}
